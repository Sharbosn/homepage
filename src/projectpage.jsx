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
export function ProjectPage({ label, isOpen, onClose }) {
  return (
    <div>
      <Box>
        <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
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
              {label === "label1" && (
                <div>
                  <p className="subheadings">Brainstorming</p>
                  <p className="subheadings">POV</p>
                  <p className="subheadings">Design Goals</p>
                  <p className="subheadings">Description</p>
                  <p className="subheadings">Verify & Storyboarding</p>
                  <p className="subheadings">Reflections</p>This is the content
                  for Object 1.
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
