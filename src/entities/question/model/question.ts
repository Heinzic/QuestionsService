import type { NestedSkill } from "../../skill";
import type { NestedSpecialization } from "../../specialization";
import type { NestedTopic } from "../../topic";
import type { NestedUserReference } from "../../user";

export type Status =  "public" | "draft";

export interface Question {
    id: number
    title: string
    slug?: string
    description: string
    code?: string
    imageSrc?: string
    keywords?: string[]
    longAnswer?: string
    shortAnswer?: string
    status?: Status
    rate?: number
    complexity?: number
    createdById: string
    updatedById?: string
    questionSpecializations: NestedSpecialization
    questionSkills: NestedSkill
    questionTopics?: NestedTopic
    createdAt: string
    updatedAt: string
    createdBy: NestedUserReference
    updatedBy: NestedUserReference
}