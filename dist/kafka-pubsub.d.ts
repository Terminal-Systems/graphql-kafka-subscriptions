/// <reference types="node" />
import { PubSubEngine } from 'graphql-subscriptions';
import * as Logger from 'bunyan';
export interface IKafkaOptions {
    topic: string;
    host: string;
    partition?: number;
    logger?: Logger;
    skipConsumer?: boolean;
    kafkaOptions?: any;
    kafkaConsumerOptions?: any;
    kafkaProducerOptions?: any;
}
export interface IKafkaProducer {
    write: (input: Buffer) => any;
}
export interface IKafkaTopic {
    readStream: any;
    writeStream: any;
}
export declare class KafkaPubSub implements PubSubEngine {
    protected producer: any;
    protected consumer: any;
    protected options: any;
    protected subscriptionMap: {
        [subId: number]: [string, Function];
    };
    protected channelSubscriptions: {
        [channel: string]: Array<number>;
    };
    protected logger: Logger;
    constructor(options: IKafkaOptions);
    publish(payload: any): boolean;
    subscribe(channel: string, onMessage: Function, options?: Object): Promise<number>;
    unsubscribe(index: number): void;
    asyncIterator<T>(triggers: string | string[]): AsyncIterator<T>;
    private onMessage;
    private createConsumer;
}
