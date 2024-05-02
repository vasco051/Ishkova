import { TTest } from "types/entities/TTest.ts";
import { TestStepVariant } from "../config.tsx";

export interface ITestStepProps {
  test: TTest;
  currentStep: TestStepVariant
  setCurrentStep: (step: TestStepVariant) => void
}