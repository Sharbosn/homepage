import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import "./projectpage.css";
import header1 from "./assets/project1/header.png";
import pic1 from "./assets/project1/pic1.jpg";
import pic2 from "./assets/project1/pic2.png";
import poll from "./assets/project1/poll.png";
import storyboard from "./assets/project1/storyboard.png";

import header2 from "./assets/project2/header.png";
import pic2_3 from "./assets/project2/3.png";
import pic2_4 from "./assets/project2/4.png";
import pic2_6 from "./assets/project2/6.png";
import pic2_7 from "./assets/project2/7.png";

import header3 from "./assets/project3/1.png";
import pic3_2 from "./assets/project3/2.png";
import pic3_3 from "./assets/project3/3.png";
import pic3_4 from "./assets/project3/4.png";
import pic3_5 from "./assets/project3/5.png";

export function ProjectPage({ label, isOpen, onClose }) {
  return (
    <div>
      <Box>
        <Modal
          size={"6xl"}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={"outside"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {label === "self-intro" && (
                <p style={{ textAlign: "center" }}>
                  Welcome. This is Fong Sin Ning's page.
                </p>
              )}
              {label === "label1" && (
                <p className="heading">
                  Project 1: If ___ on campus were more user-friendly…
                </p>
              )}
              {label === "label2" && (
                <p className="heading">Project 2: HRI for Wellbeing</p>
              )}
              {label === "label3" && (
                <p className="heading">
                  Project 3: Social XR for 'Lifelong Learning'
                </p>
              )}
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              {label === "self-intro" && (
                <p style={{ textAlign: "center" }}>DRAG AND CLICK TO EXPLORE</p>
              )}

              {label === "label1" && (
                <div>
                  <p className="content">
                    <img src={header1} />
                    <p className="subheadings">Brainstorming</p>
                    <p>
                      During rush hours, especially in the 10 mins break between
                      classes, the washrooms are often overcrowded. In our
                      freshmen year we may not know that, however, we later
                      discover that there are some lesser-known toilets and are
                      not utilized as frequently.
                    </p>
                    <p
                      style={{
                        height: "auto",
                        width: "50%",
                        float: "left",
                        padding: " 50px",
                        paddingTop: "100px",
                      }}
                    >
                      Observation: The washrooms get really crowded especially
                      around 12:00, 13:30, 15:00, which are breaks between
                      lectures. And washrooms in/near Library, LT-A, LG1
                      canteen… often have less people.
                      <p style={{ paddingTop: "40px" }}>
                        Immerse: Even if not deliberately observing, we ARE in
                        fact the active users, the ones who are most affected on
                        a daily basis.
                      </p>
                      <p className="subheadings">POV</p>
                      <p>
                        <span style={{ fontWeight: "600" }}>User:</span>{" "}
                        On-campus toilet user
                      </p>
                      <p>
                        <span style={{ fontWeight: "600" }}>Need:</span>{" "}
                        Locating available toilets during rush hours
                      </p>
                      <p>
                        <span style={{ fontWeight: "600" }}>Goal:</span> Ease
                        the serach for an available toilet slot
                      </p>
                    </p>

                    <img
                      style={{ height: "auto", width: "50%", float: "right" }}
                      src={pic1}
                    />

                    <img src={poll} />
                    <img src={pic2} />
                    <p className="subheadings">Design Goals</p>
                    <ol style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <li>
                        An additional function directly embedded into the HKUST
                        Student / Staff App, which indicates the locations of
                        the available toilet cubicles.
                        <li>
                          Students / Staff are now able to know where is the
                          closest washroom with empty slot !!
                        </li>
                        <li>
                          Simplistic UI that is intuitive and responsive:
                          Students may want to see the result quickly.
                        </li>
                      </li>
                    </ol>
                  </p>
                  <p className="subheadings">Verify & Storyboarding</p>
                  <img src={storyboard} />
                  <p className="subheadings">Reflections</p>
                  <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                    <p>Through this project, I have learnt that...</p>
                    <ul>
                      <li>
                        The ideate process is very important, and we should only
                        move on and work on other stages when succssfully
                        identitfying the problem and user needs.
                      </li>
                      <li>
                        The idea of the toilet system may not be as creative or
                        innovative, however after putting in various
                        considerations within our group, we have chosen the
                        topic based on the fact that it has been implemented
                        numerous times in larger malls, which proves its
                        practibility and effectiveness to scatter the users and
                        utilize the exisiting resources fully.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {label === "label2" && (
                <div>
                  <p className="content">
                    <img src={header2} />
                    <p className="subheadings">Brainstorming</p>
                    <p>
                      Wellbeing may mean differently to people. After conducting
                      some research, we found physical health to be the most
                      concerned topic among our students. Thus we came up with
                      the idea of health-oriented assistant chatbot, which
                      improves users' physical health by promoting healthy
                      eating and adequate sports.
                    </p>
                    <div className="display-flex">
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        <p className="subheadings">POV</p>
                        <p>
                          <span style={{ fontWeight: "600" }}>User:</span>{" "}
                          People who are conscious of health
                        </p>
                        <p>
                          <span style={{ fontWeight: "600" }}>Need:</span> Seek
                          advice for balanced diet and sports reminding
                        </p>
                        <p>
                          <span style={{ fontWeight: "600" }}>Goal:</span>{" "}
                          Maintain a healthy lifestyle in a quick and easy
                          manner
                        </p>
                      </p>
                      <img
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          paddingTop: "30px",
                        }}
                        src={pic2_3}
                      />
                      <img
                        style={{ height: "auto", width: "50%", float: "left" }}
                        src={pic2_4}
                      />
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          padding: " 50px",
                          paddingTop: "80px",
                        }}
                      >
                        <p className="subheadings">
                          Storyboard and speed dating
                        </p>
                        <p>
                          We verified our ideas by drawing the storyboard and
                          asking for the opinion of our students
                        </p>
                      </p>
                    </div>
                    <div className="display-flex">
                      <p
                        className="subheadings"
                        style={{ textAlign: "center" }}
                      >
                        Prototype
                      </p>
                    </div>

                    <div className="display-flex">
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        <p>1. Balanced diet</p>
                        <ul>
                          <li>
                            Keep track with users' eating and nutritional intake
                          </li>
                          <li>Give advice for healthy and delicious meal</li>
                          <li>Encourage users to do eat healthier</li>
                          <li>Keep track with users' BMI</li>
                        </ul>
                      </p>
                      <img
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          paddingTop: "30px",
                        }}
                        src={pic2_6}
                      />
                    </div>
                    <div className="display-flex">
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        <p>2. Encourage exercising</p>
                        <ul>
                          <li>
                            Keep track with users' physical activity level
                          </li>
                          <li>Encourage users to do sports</li>
                          <li>
                            Give suggestion of sports for specific fitness
                            training
                          </li>
                        </ul>
                      </p>
                      <img
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          paddingTop: "30px",
                        }}
                        src={pic2_7}
                      />
                    </div>

                    <div className="display-flex">
                      <p className="subheadings">Demo</p>
                    </div>
                    <div className="display-flex">
                      <iframe
                        width="80%"
                        height="415"
                        src="https://www.youtube.com/embed/gEhxUhWXKbA"
                      ></iframe>
                    </div>

                    <p
                      className="subheadings"
                      style={{ paddingLeft: "50px", paddingRight: "50px" }}
                    >
                      Usability testing and results
                    </p>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <p>
                        Finishing our prototype, we conducted usability test to
                        check if our design is practical and intuitive.
                      </p>
                      <p style={{ paddingTop: "5px" }}>
                        - 4 different users were involved in the test including:
                        aged 13 secondary student, aged 22 male
                        (gym-enthusiast), aged 23 male, aged 52 ordinary
                        housewife
                      </p>
                      <div style={{ padding: "30px" }}>
                        <p>Tasks given to the users:</p>
                        <ol>
                          <li>
                            Monitor the amount of protein you intake today
                          </li>
                          <li>Plan a healthy diet for yourself</li>
                          <li>Find out what exercises are suitable for you</li>
                        </ol>
                      </div>
                      <p style={{ padding: "30px" }}>
                        Task 1 - 4/4 success, Task 2 - 4/4 success, Task 3 - 3/4
                        success, Task 4 - 2/4 success
                      </p>
                      <div style={{ padding: "30px" }}>
                        <p>Usability Issues: </p>
                        <ul>
                          <li>
                            The chatbot is not always accurate to capture user's
                            intent and extract the food name in natural
                            language.
                          </li>
                          <li>
                            The chatbot cannot react precisely when user ask for
                            diet plan with many additional requirements (e.g.
                            user is allergic to bean).
                          </li>
                          <li>
                            Users were not expecting to type in target muscle
                            group for sports recommendation.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="subheadings">Contributions</p>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <p>
                        I have done the speed dating and demo part of the
                        project. I am grateful for my groupmates coding out the
                        prototype. I tried implementing the reminderScheduled
                        function in rasa, however I cannot figure out how to
                        call the callback webhook, when we primarily use rest in
                        interacting with the UI.
                      </p>
                    </div>
                    <p style={{ paddingTop: "30px" }} className="subheadings">
                      Reflections
                    </p>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <p>Through this project, I have learnt that...</p>
                      <p>
                        I appreciate the chance to get to know more about
                        chatbots, targeting and trying to solve real life
                        problems. The prototyping process could be serial or
                        parallel. In our group, the two major functions,
                        balanced diet and sports reminding, are basically worked
                        in parallel as they do not overlap. Usability testing
                        should be carefully implemented. One way is to design
                        specific tasks for users to follow and analyse the
                        corresponding results.
                      </p>
                    </div>
                  </p>
                </div>
              )}
              {label === "label3" && (
                <div>
                  <p className="content">
                    <img src={header3} />
                    <p className="subheadings">Brainstorming</p>
                    <p>
                      Lifelong learning is about pursuing education beyond the
                      requirements of formal schooling or corporate training.
                      There are many Youtube channels teaching practical life
                      skills like cooking, chess etc, promoting lifelong
                      learning. However, online learning like watching videos on
                      Youtube has its own disadvantages. First, the learning
                      experience is not immersive. Second, it is one-way and not
                      interactive. Third, teaching contents are more general.
                      These problems can be solved possibly using VR, so that
                      lifelong learning could be further promoted. We hereby
                      discuss the future of having an online VR learning
                      platform, where tutors can prepare realistic 3D
                      environments and lessons for their students to take at
                      their convenience. Or, that they can meet in real time
                      inside the virtual environment and the tutors could
                      customize students' learning and give lessons, just like
                      what we do in real life.
                    </p>
                    <img src={pic3_3} />
                    <div className="display-flex">
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        <p className="subheadings">POV</p>
                        <p>
                          <span style={{ fontWeight: "600" }}>User:</span>{" "}
                          People who can't be physically present in class
                        </p>
                        <p>
                          <span style={{ fontWeight: "600" }}>Need:</span>{" "}
                          Acquire new knowledge or skills of any kind they are
                          interested in to enhance their personal development
                        </p>
                        <p>
                          <span style={{ fontWeight: "600" }}>Goal:</span> Learn
                          new life skills in an efficient and iteractive way
                        </p>
                      </p>
                      <img
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          paddingTop: "30px",
                        }}
                        src={pic3_2}
                      />
                      <img
                        style={{ height: "auto", width: "50%", float: "left" }}
                        src={pic3_4}
                      />
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "right",
                          padding: " 50px",
                          paddingTop: "80px",
                        }}
                      >
                        <p className="subheadings">
                          Storyboard and speed dating
                        </p>
                        <p>
                          We verified our ideas by drawing the storyboard and
                          asking for the opinion of our students
                        </p>
                      </p>
                    </div>
                    <img
                      style={{
                        height: "auto",
                        width: "auto",
                      }}
                      src={pic3_5}
                    />
                    <div className="display-flex">
                      <p
                        className="subheadings"
                        style={{ textAlign: "center" }}
                      >
                        Prototype
                      </p>
                    </div>

                    <div className="display-flex">
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        Example 1: chess
                      </p>

                      <iframe
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/mez2f7c4z0s"
                      ></iframe>
                    </div>
                    <div className="display-flex" style={{ padding: "10px" }}>
                      <p
                        style={{
                          height: "auto",
                          width: "50%",
                          float: "left",
                          padding: " 50px",
                          paddingTop: "60px",
                        }}
                      >
                        Example 2: cooking
                      </p>

                      <iframe
                        width="auto"
                        height="auto"
                        src="https://www.youtube.com/embed/GepUUaFSBAI"
                      ></iframe>
                    </div>

                    <p className="subheadings">Contributions</p>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <p>
                        I have done the speed dating part of the project. I am
                        grateful for my groupmates preparing the prototype demo.
                      </p>
                    </div>
                    <p style={{ paddingTop: "30px" }} className="subheadings">
                      Reflections
                    </p>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <p>
                        I appreciate the chance to get to know more about VR,
                        targeting and coming up ideas to improve people's
                        lifestyles. After these 3 projects, I understand the
                        importance of time management and prioritizing things.
                        Moreover, the brainstorming part is crucial to projects.
                        I enjoy listening to the presentations of different
                        groups, becuase our classmates can always think of
                        different approaches to questions that our group has not
                        considered before and it is always interesting.
                      </p>
                    </div>
                  </p>
                </div>
              )}
            </ModalBody>

            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}
