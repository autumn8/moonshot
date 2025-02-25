import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  icon: string;

  @Column()
  networkCode: string;

  @Column()
  supportsTestMode: boolean;

  @Column()
  supportsLiveMode: boolean;
}
