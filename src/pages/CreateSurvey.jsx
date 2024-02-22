import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Select, VStack, Text, StackDivider, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaGripVertical } from "react-icons/fa";

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);

  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("");

  const addQuestion = () => {
    const newQuestion = { text: questionText, type: questionType };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setQuestionType("");
  };

  const reorderQuestions = (sourceIndex, destinationIndex) => {
    if (destinationIndex < 0 || destinationIndex >= questions.length) return; // Prevents out-of-bounds reordering
    const newQuestions = Array.from(questions);
    const [removed] = newQuestions.splice(sourceIndex, 1);
    newQuestions.splice(destinationIndex, 0, removed);
    setQuestions(newQuestions);
  };

  const handleSurveyTitleChange = (e) => setSurveyTitle(e.target.value);
  const handleSurveyDescriptionChange = (e) => setSurveyDescription(e.target.value);
  const handleQuestionTextChange = (e) => setQuestionText(e.target.value);
  const handleQuestionTypeChange = (e) => setQuestionType(e.target.value);

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" m={4} id="create-survey-form">
      <Button colorScheme="purple" onClick={() => navigate("/preview-survey", { state: { surveyTitle, surveyDescription, questions } })}>
        Preview Survey
      </Button>
      <Heading>Create Survey</Heading>
      {/* Survey configuration form */}
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Survey Configuration</Heading>
        <FormControl id="survey-title" isRequired mt={4}>
          <FormLabel>Survey Title</FormLabel>
          <Input placeholder="Enter survey title..." value={surveyTitle} onChange={handleSurveyTitleChange} />
        </FormControl>
        <FormControl id="survey-description" mt={4}>
          <FormLabel>Survey Description</FormLabel>
          <Input placeholder="Enter survey description..." value={surveyDescription} onChange={handleSurveyDescriptionChange} />
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
          <Input placeholder="Enter question text..." value={questionText} onChange={handleQuestionTextChange} />
        </FormControl>
        <FormControl id="question-type" isRequired mt={4}>
          <FormLabel>Question Type</FormLabel>
          <Select placeholder="Select question type" value={questionType} onChange={handleQuestionTypeChange}>
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
