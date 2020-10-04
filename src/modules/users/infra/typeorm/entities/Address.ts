import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

interface IGeo {
  lat: string;
  lng: string;
}

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column()
  @Exclude()
  lat: string;

  @Column()
  @Exclude()
  lng: string;

  @Expose({ name: 'geo' })
  getAvatarUrl(): IGeo {
    return {
      lat: this.lat,
      lng: this.lng,
    };
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
