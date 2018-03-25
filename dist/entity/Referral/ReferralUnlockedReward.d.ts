import { Referral, ReferralReward } from '..';
export declare class ReferralUnlockedReward {
    id: number;
    dateUnlocked: Date;
    reward: ReferralReward;
    referral: Referral;
}
