export interface UsersInterface {
    id: number
    name: string
    nickname: string | null
    mobile: string | null
    email: string | null
    referrer_count: number
    referrer_id: number
    affiliate: { id: number; name: string }
    master_id: string
    language: { id: number; name: string }
    balance: {
        id: number
        balance: string
        balance_referrer: string
        locked_balance: string
        withdraw: string
    }
    verification: string
    user_type: number
    status: string
    sms_verified_at: string
    email_verified_at: string
    created_at: string
    updated_at: string
    notes?: string
}
