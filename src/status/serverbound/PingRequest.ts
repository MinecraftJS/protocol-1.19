import { Packet } from '../../Packet';

export class PingRequestPacket extends Packet<PingRequest> {
  public static id = 0x01;

  public write(data?: PingRequest): void {
    this.data = data || this.data;

    this.buf.writeLong(data.payload);
  }

  public read(): PingRequest {
    this.data = {
      payload: this.buf.readLong() as number,
    };

    return this.data;
  }
}

/**
 * @see https://wiki.vg/Protocol#Ping_Request
 */
interface PingRequest {
  /** May be any number. Notchian clients use a system-dependent time value which is counted in milliseconds. */
  payload: number;
}
