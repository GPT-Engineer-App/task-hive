import { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Input,
  Button,
  Checkbox,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FaPlus, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container
      centerContent
      maxW="container.md"
      py={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading mb={6}>Todo App</Heading>
      <HStack mb={4} width="100%">
        <Input
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addTask}>
          Add Task
        </Button>
      </HStack>
      <VStack spacing={3} width="100%">
        {tasks.map((task, index) => (
          <HStack
            key={index}
            width="100%"
            p={3}
            borderWidth="1px"
            borderRadius="md"
            justifyContent="space-between"
            bg={task.completed ? "green.100" : "white"}
          >
            <Checkbox
              isChecked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              colorScheme="teal"
            >
              <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
            </Checkbox>
            {task.completed && <FaCheckCircle color="green" />}
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;