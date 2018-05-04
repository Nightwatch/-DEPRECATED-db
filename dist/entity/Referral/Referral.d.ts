import { User, Guild, ReferralRole, ReferralUnlockedReward } from '..';
export declare class Referral {
    /**
     * Referral ID. Not auto-generated. Should be generated in the implementation. Ideally, it should only be 4-6 digits long.
     *
     * @type {number}
     * @memberof Referral
     */
    id: number;
    /**
     * Discord invite link.
     *
     * @type {string}
     * @memberof Referral
     */
    inviteUrl: string;
    /**
     * Number of times people joined using the referral link.
     *
     * @type {number}
     * @memberof Referral
     */
    joinCount: number;
    /**
     * The date the referral was created.
     *
     * @type {Date}
     * @memberof Referral
     */
    dateCreated: Date;
    /**
     * The role that is given to each user that joins via the referral link.
     *
     * @type {ReferralRole}
     * @memberof Referral
     */
    role: ReferralRole;
    /**
     * User that created the referral. They will be known as the referral owner.
     *
     * @type {User}
     * @memberof Referral
     */
    user: User;
    /**
     * The Guild the referral belongs to.
     *
     * @type {Guild}
     * @memberof Referral
     */
    guild: Guild;
    unlockedRewards: ReferralUnlockedReward[];
    constructor(referral?: Referral);
}
