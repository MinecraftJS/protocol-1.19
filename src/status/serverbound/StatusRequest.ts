import { Packet } from '../../Packet';

export class StatusRequestPacket extends Packet<StatusRequest> {
  public static id = 0x00;

  public write(data?: StatusRequest): void {
    this.data = data || this.data;
  }

  public read(): StatusRequest {
    this.data = {};

    return this.data;
  }
}

/**
 * @see https://wiki.vg/Protocol#Status_Request
 */
interface StatusRequest {}
