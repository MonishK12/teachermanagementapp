import jwt from "jsonwebtoken";

export function mintohr(num: number): string {
  const hr = Math.floor(num / 60);
  const mm = num % 60;

  return `${hr} hr ${mm} min`;
}
export function alignDate(str: string): string {
  return str.split("-").reverse().join("-");
}
export function durationhh(str: string): number {
  const [hh, mm] = str.split(":");
  console.log(hh);
  return parseInt(hh as string);
}
export function durationmm(str: string): number {
  const [hh, mm] = str.split(":");
  return parseInt(mm as string);
}
export function durationhhmmss(str: string): string {
  const [hh, mm, ss]: string[] = str.split(":");
  if (
    (hh === "0" || hh === "00") &&
    (mm === "0" || mm === "00") &&
    ss !== "0" &&
    ss !== "00"
  )
    return `${ss} sec`;
  else if (
    (hh === "0" || hh === "00") &&
    mm !== "0" &&
    mm !== "00" &&
    (ss === "0" || ss === "00")
  )
    return `${mm} min`;
  else if (
    hh !== "0" &&
    hh !== "00" &&
    (mm === "0" || mm === "00") &&
    (ss === "0" || ss === "00")
  )
    return `${hh} hr`;
  else if (
    hh !== "0" &&
    hh !== "00" &&
    mm !== "0" &&
    mm !== "00" &&
    (ss === "0" || ss === "00")
  )
    return `${hh} hr ${mm} min`;
  else if (
    hh !== "0" &&
    hh !== "00" &&
    (mm === "0" || mm === "00") &&
    ss !== "0" &&
    ss !== "00"
  )
    return `${hh} hr ${ss} sec`;
  else if (
    (hh === "0" || hh === "00") &&
    mm !== "0" &&
    mm !== "00" &&
    ss !== "0" &&
    ss !== "00"
  )
    return `${mm} min ${ss} sec`;
  else return `${hh} hr ${mm} min ${ss} sec`;
}

export function formatAMPM(date: string): string {
  let [hours, minutes]: any = date.split(":");
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

export function formatLocalDateTime(dateTime: string): string {
  let [date, time]: any = dateTime.split("T");
  const newDate: string = alignDate(date);
  const newTime: string = formatAMPM(time);
  let strTime = `${newDate} ${newTime}`;
  return strTime;
}

function removeColon(s: string): number {
  return parseInt(s.split(":").join(""));
}

export function diffBetweenTimes(s1: string, s2: string): string {
  let time1 = removeColon(s1);
  let time2 = removeColon(s2);
  let hourDiff = time2 / 100 - time1 / 100 - 1;
  let minDiff = (time2 % 100) + (60 - (time1 % 100));
  if (minDiff >= 60) {
    hourDiff++;
    minDiff = minDiff - 60;
  }
  let res = hourDiff.toString() + ":" + minDiff.toString();
  return res;
}

export function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function generateToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
}
export function createActivationToken(payload: object) {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET!, {
    expiresIn: "40m",
  });
}

export function createAccessToken(payload: object) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1d",
  });
}

export function createRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  });
}
export function decodeToken(payload: any) {
  return jwt.verify(payload, process.env.ACCESS_TOKEN_SECRET!);
}
