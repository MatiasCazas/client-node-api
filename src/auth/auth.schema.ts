import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  user: string;

  @Prop()
  password: string;

  @Prop()
  id: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
