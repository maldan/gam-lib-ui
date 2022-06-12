export class TimeHelper {
  static HMStoSeconds(hms: string): number {
    const a = hms.split(":"); // split it at the colons
    return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  }
}
