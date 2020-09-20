import roverCuriosity from "../../images/rover/image-70f1f29e-800x488.jpg";
import roverOpportunity from "../../images/rover/2162764.jpg";
import roverSpirit from "../../images/rover/1517505305166882260.jpg";

const curiosity = {
  description: `Curiosity was launched from Cape Canaveral on November 26th, 2011, at
  15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August
  6th, 2012, 05:17 UTC`,
  title: "Curiosity",
  image: roverCuriosity,
  camera: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
};

const opportunity = {
  description: `Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program,
  it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A)
  touched down on the other side of the planet`,
  title: "Opportunity",
  image: roverOpportunity,
  camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
};

const spirit = {
  description: `It landed successfully within the impact crater Gusev on Mars at 04:35
  Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet.`,
  title: "Spirit",
  image: roverSpirit,
  camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
};

export { curiosity, opportunity, spirit };
