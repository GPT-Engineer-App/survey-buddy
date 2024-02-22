import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Select, VStack, Text, StackDivider, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaGripVertical } from "react-icons/fa";

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    // Placeholder function to add a question
  };

  const reorderQuestions = (sourceIndex, destinationIndex) => {
    // Placeholder function to reorder questions
  };

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" m={4}>
      <Heading>Create Survey</Heading>
      {/* Survey configuration form */}
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Survey Configuration</Heading>
        <FormControl id="survey-title" isRequired mt={4}>
          <FormLabel>Survey Title</FormLabel>
          <Input placeholder="Enter survey title..." />
        </FormControl>
        <FormControl id="survey-description" mt={4}>
          <FormLabel>Survey Description</FormLabel>
          <Input placeholder="Enter survey description..." />
        </FormControl>
        <Button mt={4} colorScheme="blue">
          Save Configuration
        </Button>
      </Box>
      {/* Question creation form */}
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Add Question</Heading>
        <FormControl id="question-text" isRequired mt={4}>
          <FormLabel>Question Text</FormLabel>
          <Input placeholder="Enter question text..." />
        </FormControl>
        <FormControl id="question-type" isRequired mt={4}>
          <FormLabel>Question Type</FormLabel>
          <Select placeholder="Select question type">
            <option value="text">Text</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="checkbox">Checkbox</option>
          </Select>
        </FormControl>
        <Button mt={4} colorScheme="blue" onClick={addQuestion}>
          Add Question
        </Button>
      </Box>
      {/* Questions list with order functionality */}
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Manage Questions</Heading>
        <List spacing={3}>
          {questions.map((question, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaGripVertical} cursor="grab" />
              <Text>{question.text}</Text>
              <IconButton
                icon={<FaGripVertical />}
                variant="outline"
                onClick={() => reorderQuestions(index, index + 1)} // Placeholder for actual reorder function
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Button colorScheme="green">Create Survey</Button>
    </VStack>
  );
};

export default CreateSurvey;
