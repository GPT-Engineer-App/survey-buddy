import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Container, Heading, Input, List, ListItem, useToast, IconButton, Text, VStack, HStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [surveys, setSurveys] = useState([]);
  const [newSurveyTitle, setNewSurveyTitle] = useState("");
  const toast = useToast();

  const handleNewSurveyChange = (event) => {
    setNewSurveyTitle(event.target.value);
  };

  const handleCreateSurvey = () => {
    if (newSurveyTitle.trim() === "") {
      toast({
        title: "Error",
        description: "Survey title can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setSurveys([...surveys, newSurveyTitle]);
    setNewSurveyTitle("");
  };

  const handleDeleteSurvey = (surveyIndex) => {
    const updatedSurveys = surveys.filter((_, index) => index !== surveyIndex);
    setSurveys(updatedSurveys);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1">Create and Manage Surveys</Heading>
        <NavLink to="/create-survey">
          <Button colorScheme="blue">Create New Survey</Button>
        </NavLink>
        <HStack width="100%">
          <Input placeholder="Enter survey title..." value={newSurveyTitle} onChange={handleNewSurveyChange} />
          <IconButton colorScheme="blue" aria-label="Add survey" icon={<FaPlus />} onClick={handleCreateSurvey} />
        </HStack>
        <Box width="100%">
          <Heading size="md">Surveys</Heading>
          <List spacing={3}>
            {surveys.map((survey, index) => (
              <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                <Text>{survey}</Text>
                <IconButton colorScheme="red" aria-label="Delete survey" icon={<FaTrash />} onClick={() => handleDeleteSurvey(index)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
