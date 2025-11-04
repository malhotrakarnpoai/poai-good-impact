import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ProblemStatementsProps {
  onRegisterClick: () => void;
}

const ProblemStatements = ({ onRegisterClick }: ProblemStatementsProps) => {
  const problems = [
    {
      id: "1a",
      title: "Fashion Waste - Circular Design: Pre-Production & Concept Stage",
      focus: "Circular design of products or items in the fashion and lifestyle industry.",
      stage: "Right at the design and concept stage.",
      item: "A piece of apparel is being created.",
      techRole: "How can tech help in making sure that the design and the cuts are low waste and using the right materials.",
      outcome: "As the material is made it's already on the path of being 'lower waste' and 'circular'.",
    },
    {
      id: "1b",
      title: "Fashion Waste - Post-Consumer Waste Management & Segregation",
      focus: "Post-consumer.",
      stage: "",
      item: "",
      techRole: "What are the ways in which technology can help in segregating items and products, such that they can be easily redirected back into reuse or repurposing.",
      outcome: "Most of it actually lands up in landfill.",
      currentState: true,
    },
    {
      id: "2a",
      title: "Home Waste - Sustainable Habits : Digital Cues for Everyday Living",
      focus: "Encouraging everyday sustainable habits through digital cues.",
      stage: "During daily routine planning and movement.",
      item: "A personal digital reminder experience.",
      techRole: "Explore gentle, context-aware prompts that support users in remembering sustainable choices as they go about their day.",
      outcome: "Users naturally build mindful habits through subtle nudges and reflection.",
    },
    {
      id: "2b",
      title: "Home Waste - Conscious Consumption : Long-term Engagement & Progress Tracking",
      focus: "Building long-term engagement with conscious consumption.",
      stage: "After actions or purchases across a period of time.",
      item: "A personal progress and reflection experience.",
      techRole: "Use simple data inputs or digital tracking to help individuals notice patterns in their sustainable practices and celebrate mindful behaviour.",
      outcome: "A supportive, engaging system that encourages ongoing commitment to conscious living without pressure or judgement.",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Problem Statements
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose your challenge and make an impact
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
            {problems.map((problem) => (
              <AccordionItem
                key={problem.id}
                value={problem.id}
                className="bg-background rounded-2xl border-2 border-border overflow-hidden shadow-card"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="space-y-4 text-foreground/80">
                    {!problem.placeholder ? (
                      <>
                        <div>
                          <strong className="text-foreground">Focus:</strong> {problem.focus}
                        </div>
                        {problem.stage && (
                          <div>
                            <strong className="text-foreground">Target Stage:</strong> {problem.stage}
                          </div>
                        )}
                        {problem.item && (
                          <div>
                            <strong className="text-foreground">The Item:</strong> {problem.item}
                          </div>
                        )}
                        <div>
                          <strong className="text-foreground">Tech's Role:</strong> {problem.techRole}
                        </div>
                        {problem.outcome && (
                          <div>
                            <strong className="text-foreground">
                              {problem.currentState ? "Current State of Problem:" : "The Outcome:"}
                            </strong>{" "}
                            {problem.outcome}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        <p>{problem.techRole}</p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
      </Accordion>

      <div className="text-center pt-8">
        <Button
          onClick={onRegisterClick}
          size="lg"
          className="rounded-full px-10 text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Register for Your Challenge
        </Button>
      </div>
    </div>
  );
};

export default ProblemStatements;
