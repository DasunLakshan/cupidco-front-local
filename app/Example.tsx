"use client";

import React, { useState } from "react";
import VideoSlider from "./components/common/sliders/VideoSlider";
import ImageSlider from "./components/common/sliders/ImageSlider";
import NotificationCard from "./components/cards/NotificationCards";
import PrimaryButton from "./components/common/buttons/PrimaryButton";
import SecondaryButton from "./components/common/buttons/SecondaryButton";
import RoundedButton from "./components/common/buttons/RoundedIconButton";
import { FaArrowUp } from "react-icons/fa";
import Dropdown from "./components/common/dropdown/Dropdown";
import CheckboxComponent from "./components/common/inputs/Checkbox";
import RadioButton from "./components/common/inputs/RadioButton";
import FileUpload from "./components/common/inputs/FileUpload";
import OtpInput from "./components/common/inputs/OtpInput";
import TextArea from "./components/common/inputs/TextArea";
import TextField from "./components/common/inputs/Input";
import { CheckboxGroup } from "./components/common/inputs/MultipleCheckbox";
import ProfilePicture from "./components/common/profile/ProfilePicture";
import SearchBox from "./components/common/search/SearchBox";
import SocialMedia from "./components/common/social media/SocialMedia";
import Title from "./components/common/texts/Title";
import Description from "./components/common/texts/Description";
import ProgressBar from "./components/progress_bar/ProgressBar";
import AccordionGroup from "./components/accordion/Accordion";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});
  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };

  const handleCheckboxChange = (selected: string[]) => {
    console.log("Selected options:", selected);
  };

  const [notifications] = useState([
    {
      id: 1,
      type: "Reject",
      user: "Ann Fernando",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
    {
      id: 2,
      type: "Request",
      user: "Amali Fernando",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
    {
      id: 3,
      type: "Birthday",
      user: "Shehan Subasinghe",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
    {
      id: 4,
      type: "Like",
      user: "Sanjula Abeysinghe",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
    {
      id: 5,
      type: "Favourite",
      user: "Sanjula Abeysinghe",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
    {
      id: 6,
      type: "Super Like",
      user: "Kalani Perera",
      timestamp: "Thu at 7:45 AM",
      profilePicture: "images/ProfilePicture.jpg",
    },
  ]);

  const VideoUrl = ["images/SliderVideo1.mp4", "images/SliderVideo2.mp4"];

  const ImageUrl = ["images/SliderImage1.png", "images/SliderImage2.png"];

  const items = ["item 1", "item 2", "item 3"];

  const options = ["Option 1", "Option 2", "Option 3"];

  const accordionData = [
    {
      id: "1",
      title: "Accordion 1",
      description: "Description for Accordion 1",
    },
    {
      id: "2",
      title: "Accordion 2",
      description: "Description for Accordion 2",
    },
    {
      id: "3",
      title: "Accordion 3",
      description: "Description for Accordion 3",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-10">
      <PrimaryButton label="Primary button" />
      <SecondaryButton label="Secondary button" />
      <div>
        <RoundedButton icon={<FaArrowUp />} />
      </div>

      <Dropdown id="items" label="Select here" values={items} />
      <CheckboxComponent name="Remember me" value="Remember me" />

      <div className="flex flex-row gap-3">
        <RadioButton
          groupName="gender"
          name="Male"
          value="male"
          isSelected={selectedOptions["gender"] === "male"}
          onChange={handleOptionChange}
        />
        <RadioButton
          groupName="gender"
          name="female"
          value="female"
          isSelected={selectedOptions["gender"] === "female"}
          onChange={handleOptionChange}
        />
      </div>

      <FileUpload label="upload" />
      <OtpInput onOtpChange={() => {}} />
      <TextArea id="textarea" label="Type here" />
      <TextField id="input" label="Name" type="name" />
      <CheckboxGroup options={options} onChange={handleCheckboxChange} />

      <div>
        <ProfilePicture
          active={true}
          imageName="ProfilePicture.jpg"
          position="top-right"
        />
      </div>

      <SearchBox onChange={() => {}} placeholder="Search Here" />

      <div className="flex flex-row gap-5">
        <SocialMedia network="facebook" url="www.facebook.com" />
        <SocialMedia network="twitter" url="www.twitter.com" />
        <SocialMedia network="instagram" url="www.instagram.com" />
      </div>

      <Title text="Heading" center={true} />
      <Description text="Lorem ipsum Lorem ipsum" center={true} />
      <ProgressBar progress={50} />
      <AccordionGroup accordionData={accordionData} />

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          type={notification.type}
          user={notification.user}
          timestamp={notification.timestamp}
          profilePicture={notification.profilePicture}
        />
      ))}

      <VideoSlider videoUrls={VideoUrl} />
      <ImageSlider imageUrls={ImageUrl} />
    </div>
  );
}
