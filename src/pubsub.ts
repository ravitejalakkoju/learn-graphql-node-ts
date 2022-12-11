import { Link, Vote } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";
import { TypedPubSub } from "typed-graphql-subscriptions";

export type PubSubChannels = {
  newLink: [{ createdLink: any }];
  newVote: [{ createdVote: any }];
};

export const pubSub = new TypedPubSub<PubSubChannels>(new PubSub());