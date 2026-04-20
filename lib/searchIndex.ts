/**
 * @fileoverview Search index for the site. Add one import per page when using
 * this repo as a template for a new documentation project.
 */

import { meta as communication } from "@/app/communication/meta";
import { meta as contextualStatement } from "@/app/contextual-statement/meta";
import { meta as declaration } from "@/app/declaration/meta";
import { meta as futurePlans } from "@/app/future-plans/meta";
import { meta as javascriptDevelopment } from "@/app/javascript-development/meta";
import { meta as legislation } from "@/app/legislation/meta";
import { meta as policiesAndStandards } from "@/app/policies-and-standards/meta";
import { meta as targetLearners } from "@/app/target-learners/meta";
import { meta as teachingAndLearning } from "@/app/teaching-and-learning/meta";
import { meta as technicalKnowledge } from "@/app/technical-knowledge/meta";
import { meta as technologyConstraints } from "@/app/technology-constraints/meta";
import { meta as technologyDeployment } from "@/app/technology-deployment/meta";

export interface SearchEntry {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    slug: string;
}

export const searchIndex: SearchEntry[] = [
    contextualStatement,
    technologyConstraints,
    technicalKnowledge,
    technologyDeployment,
    teachingAndLearning,
    targetLearners,
    legislation,
    policiesAndStandards,
    communication,
    javascriptDevelopment,
    futurePlans,
    declaration,
];
