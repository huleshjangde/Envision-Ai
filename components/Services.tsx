import ThreeDCardDemo from "@/components/ui/Mycard";
import { HeartPulseIcon, DietPlanIcon, BMIIcon } from "@/components/Icons"; // Import your icons

const Services: React.FC = () => {
  const data = [
    {
      icon: <HeartPulseIcon className="h-12 w-12" />,
      title: "Heart Health Prediction",
      description: "Receive accurate predictions about your heart health.",
      pageTitle: "heart",
    },
    {
      icon: <BMIIcon className="h-12 w-12" />,
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index (BMI) to assess your weight status.",
      pageTitle: "bmi",
    },
    {
      icon: <DietPlanIcon className="h-12 w-12" />,
      title: "Personalized Diet Plan",
      description:
        "Get personalized diet plans to support your health and well-being.",
      pageTitle: "diet",
    },
    // {
    //   icon: <StethoscopeIcon className="h-12 w-12" />,
    //   title: 'Virtual Health Assistants',
    //   description: 'AI-powered assistants for personalized care.'
    // }
  ];

  return (
    <div className="mx-auto w-fit place-items-center grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <ThreeDCardDemo
            icon={item.icon}
            title={item.title}
            description={item.description}
            page={item.pageTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
