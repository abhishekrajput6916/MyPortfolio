import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const GithubGraph = () => {
  return (
    <div className='pb-16 lg:py-24"'>
      <div className="container">
        <SectionHeader
          title="GitHub Contribution Highlights"
          description="Explore my open-source and personal contributions."
          eyebrow="My Open Source Journey"
        />
        <Card className="overflow-x-clip mx-auto h-full flex justify-end  mt-20  ">
          <iframe
            src="https://git-graph.vercel.app/embed/abhishekrajput6916?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=0&blockSize=10&fontSize=14&weekStart=4&year=2024"
            className=" w-full h-full"
          ></iframe>
        </Card>
      </div>
    </div>
  );
};

export default GithubGraph;
