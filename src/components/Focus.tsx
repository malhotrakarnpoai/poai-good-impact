import ProblemStatements from "./ProblemStatements";

interface FocusProps {
  onRegisterClick: () => void;
}

const Focus = ({ onRegisterClick }: FocusProps) => {
  return (
    <section id="challenges" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-center">
              The Challenge: Help Goa Become a Sustainable Paradise
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/80 text-center max-w-4xl mx-auto">
              How can we use AI to encourage conscious consumerism among tourists and locals to reduce waste (especially during busy seasons) and create year-round, sustainable solutions?
            </p>
          </div>

          {/* Problem Statements integrated within Focus */}
          <div className="pt-8">
            <ProblemStatements onRegisterClick={onRegisterClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
