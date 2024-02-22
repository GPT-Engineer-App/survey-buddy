import React from "react";
import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

const CreateSurvey = () => {
  return (
    <VStack spacing={4} align="stretch" m={4}>
      <Heading>Create Survey</Heading>
      <Text>Survey configuration UI will be implemented here.</Text>
      {/* Placeholder elements for survey configuration */}
      <Box>
        <Button>Configure Survey</Button>
      </Box>
      {/* Placeholder elements for adding questions */}
      <Box>
        <Button>Add Question</Button>
      </Box>
      {/* Placeholder elements for ordering questions */}
      <Box>
        <Button>Order Questions</Button>
      </Box>
    </VStack>
  );
};

export default CreateSurvey;
