'use client'
import { CompanyForm } from '@/components/forms/onboarding/CompanyForm'
import { UserTypeSelection } from '@/components/forms/onboarding/UserTypeForm'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'
type UserSelectionType = 'company' | 'jobSeeker' | null
export function OnboardingForm() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<UserSelectionType>(null)
  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type)
    setStep(2)
  }

  function renderStep() {
    switch (step) {
      case 1:
        return (
          <UserTypeSelection onSelect={handleUserTypeSelection}/>
        )

      case 2:
        return userType === 'company' ? (
          <CompanyForm />
        ) : (
          <p>User is a job seeker</p>
        )

      default:
        return null
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={'/logo.png'} alt="JobMarshal Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job <span className="text-primary">Marshal</span>
        </h1>
      </div>
      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  )
}
