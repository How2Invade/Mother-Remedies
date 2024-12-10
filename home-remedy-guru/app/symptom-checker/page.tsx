"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { symptoms, Symptom } from './symptomData'

export default function SymptomChecker() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null)
  const [selectedSubSymptoms, setSelectedSubSymptoms] = useState<string[]>([])

  const handleSymptomSelection = (symptomName: string) => {
    const selected = symptoms.find(s => s.name === symptomName)
    if (selected) {
      setSelectedSymptom(selected)
      setCurrentStep(1)
    }
  }

  const handleSubSymptomSelection = (subSymptom: string) => {
    setSelectedSubSymptoms(prev => {
      if (prev.includes(subSymptom)) {
        return prev.filter(s => s !== subSymptom)
      } else {
        return [...prev, subSymptom]
      }
    })
  }

  const resetChecker = () => {
    setCurrentStep(0)
    setSelectedSymptom(null)
    setSelectedSubSymptoms([])
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Symptom Checker</h1>
      {currentStep === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>What's your main symptom?</CardTitle>
            <CardDescription>Choose the symptom that best describes your condition</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={handleSymptomSelection}>
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={symptom.name} id={`symptom-${index}`} />
                  <Label htmlFor={`symptom-${index}`}>{symptom.name}</Label>
                  <Image src="/placeholder.svg?height=30&width=30" alt={symptom.name} width={30} height={30} />
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      )}

      {currentStep === 1 && selectedSymptom && (
        <Card>
          <CardHeader>
            <CardTitle>Are you experiencing any of these symptoms?</CardTitle>
            <CardDescription>Select all that apply</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedSymptom.subSymptoms.map((subSymptom, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id={`subSymptom-${index}`}
                  checked={selectedSubSymptoms.includes(subSymptom)}
                  onChange={() => handleSubSymptomSelection(subSymptom)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor={`subSymptom-${index}`}>{subSymptom}</Label>
              </div>
            ))}
            <Button onClick={() => setCurrentStep(2)} className="mt-4">Next</Button>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && selectedSymptom && (
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Based on your symptoms, here are some suggestions:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {selectedSymptom.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-center mb-2">
                  <Image src="/placeholder.svg?height=20&width=20" alt="Recommendation icon" width={20} height={20} className="mr-2" />
                  {recommendation}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">Remember, these are general recommendations. If symptoms persist or worsen, please consult with a healthcare professional.</p>
            <Button onClick={resetChecker} className="mt-4">Start Over</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

