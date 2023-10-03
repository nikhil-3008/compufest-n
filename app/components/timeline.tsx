import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timelineContent = [
  {
    date: '11 Oct 2023',
    title: 'UI UX Bootcamp',
    iconurl:'/AnimateIcons/computer.gif',
    imageurl: '/EventsLogo/UiUx.png',
    time: '11am-1pm',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '11 Oct 2023',
    title: 'Versus Coding',
    iconurl:'/AnimateIcons/vs.gif',
    imageurl: '/EventsLogo/VersusCoding.png',
    time: '1pm-2pm',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '11 Oct 2023',
    title: 'WebNetics',
    iconurl:'/AnimateIcons/statistics.gif',
    imageurl: '/EventsLogo/WebNetics.png',
    time: '2pm-3pm',
    description: 'This Workshop is about on Web3',
  },
 {
    date: '11 Oct 2023',
    title: 'Optimiser',
    iconurl:'/AnimateIcons/setting.gif',
    imageurl: '/EventsLogo/Optimizer.png',
    time: '9pm-11.30pm',
    description: 'This Workshop is about on Web3',
  },{
    date: '12 Oct 2023',
    title: 'Scripted Secrets',
    iconurl:'/AnimateIcons/cyborg.gif',
    imageurl: '/EventsLogo/Scripted.png',
    time: '12pm-2pm',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '12 Oct 2023',
    title: 'Arduino Workshop',
    iconurl:'/AnimateIcons/multiple-sensor.gif',
    imageurl: '/EventsLogo/Arduino.png',
    time: '2pm-4pm',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '12 Oct 2023',
    title: 'Web3 Workshop', 
    iconurl:'/AnimateIcons/blocked.gif',
    imageurl: '/EventsLogo/Web3.png',
    time: '6pm Onwards',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '12 Oct 2023',
    title: 'Power Bi Workshop',
    iconurl:'/AnimateIcons/stats.gif',
    imageurl: '/EventsLogo/PowerBI.png',
    time: '3pm-4:30pm',
    description: 'This Workshop is about on Web3',
  },
  {
    date: '12 Oct 2023',
    title: 'Computing Technologies',
    iconurl:'/AnimateIcons/coding.gif',
    imageurl: '/EventsLogo/ComputingTechnology.png',
    time: '4pm Onwards',
    description: 'This Workshop is about on Web3',
  },
  
  
];

const StepperTimeline = () => {
  return (
    <div id="schedule">
    <VerticalTimeline>
      {timelineContent.map((content, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element animate__animated animate__fadeIn`}
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            border: '2px solid teal-800',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
          // date={content.date}
          iconStyle={{
            background: 'rgba(0.2, 0.5, 0, 0.2)',
            color: '#fff',
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            
          } }
          icon={
            <img src={`${content.iconurl}`} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          }
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div>
              <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold text-white">{content.title}</h5>
              {/* <p className="text-sm md:text-base lg:text-lg">{content.description}</p> */}
              <div className="flex flex-row md:flex flex-col">
              <h4 className="text-sm md:text-base lg:text-lg text-white mr-2">{content.time}</h4>
              <h4 className="text-sm md:text-base lg:text-lg text-white">{content.date}</h4>
            </div>

            </div>
            <img src={`${content.imageurl}`} alt="image" className="w-28 h-28 hover:translate-y-[-10px]" />
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
  );
};

export default StepperTimeline;
