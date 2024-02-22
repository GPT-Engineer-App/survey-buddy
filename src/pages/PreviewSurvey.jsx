import React from "react";
import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const PreviewSurvey = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { surveyTitle, surveyDescription, questions } = location.state;

  return (
    <VStack spacing={4} align="stretch" m={4}>
      <Heading>{surveyTitle}</Heading>
      <Text>{surveyDescription}</Text>
      {questions.map((question, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text mb={2}>{question.text}</Text>
          {/* Here you could add different input types based on question.type */}
        </Box>
      ))}
      <Button colorScheme="blue" onClick={() => navigate(-1)}>
        Back to Edit
      </Button>
    </VStack>
  );
};

export default PreviewSurvey;
