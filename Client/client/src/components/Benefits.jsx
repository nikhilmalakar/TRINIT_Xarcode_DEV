import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import FlexContainer from "./FlexContainer";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-bold "
          title="Why Learn with LinguaConnect?"
        />
        

        <FlexContainer />
      </div>
    </Section>
  );
};

export default Benefits;
