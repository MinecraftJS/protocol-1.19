import Packet from '../../Packet';

export default class StatusResponsePacket extends Packet<StatusResponse> {
  public static id = 0x00;

  public write(data?: StatusResponse): void {
    this.data = data || this.data;

    this.buf.writeString(data.jsonResponse);
  }

  public read(): StatusResponse {
    this.data = {
      jsonResponse: this.buf.readString(),
    };

    return this.data;
  }
}

/**
 * @see https://wiki.vg/Protocol#Status_Response
 */
interface StatusResponse {
  /** See Server List [Ping#Response](https://wiki.vg/Server_List_Ping#Response); as with all strings this is prefixed by its length as a VarInt.  */
  jsonResponse: string;
}
