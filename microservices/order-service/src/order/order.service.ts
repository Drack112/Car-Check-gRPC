import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schema/order.schema';
import { Model } from 'mongoose';
import { NewDBOrder } from './interfaces/new.order.interface';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(data: NewDBOrder): Promise<Order> {
    const order = new this.orderModel(data);
    return order.save();
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id);
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }
}
