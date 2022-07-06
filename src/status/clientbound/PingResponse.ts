import { Packet } from '../../Packet';

export class PingResponsePacket extends Packet<PingResponse> {
  public static id = 0x01;

  public write(data?: PingResponse): void {
    this.data = data || this.data;

    this.buf.writeLong(data.payload);
  }

  public read(): PingResponse {
    this.data = {
      payload: this.buf.readLong() as number,
    };

    return this.data;
  }
}

/**
 * @see https://wiki.vg/Protocol#Ping_Response
 */
interface PingResponse {
  /** Should be the same as sent by the client. */
  payload: number;
}
