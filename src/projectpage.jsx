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
import header from "./assets/project1/header.png";
import pic1 from "./assets/project1/pic1.jpg";
import pic2 from "./assets/project1/pic2.png";
import poll from "./assets/project1/poll.png";
import storyboard from "./assets/project1/storyboard.png";

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
                    <img src={header} />
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
              {label === "label2" && <p>There is no content available yet.</p>}
              {label === "label3" && <p>There is no content available yet.</p>}
            </ModalBody>

            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}
