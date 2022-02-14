import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from '@chakra-ui/react';

const SubmissionPrompt = ({
  open,
  onClose,
  processRequest,
}: // eslint-disable-next-line no-undef
SubmissionPromptProps): JSX.Element => {
  return (
    <Modal isOpen={open} closeOnOverlayClick={false} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="#0F6299"
        alignSelf="center"
        color="white"
        maxWidth={['80%', '70%', '60%', '50%']}
      >
        <ModalHeader>
          <Text color="white" textAlign="center">
            Send Refer?
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text
            textAlign="center"
            fontWeight={700}
            fontSize="14px"
            lineHeight="16.8px"
            letterSpacing="5%"
            mb={3}
          >
            Are you sure you want to refer?
          </Text>
          <Flex justifyContent="space-around" my={4}>
            <Button
              borderRadius="40px"
              bg="white"
              width="110px"
              color="custom.levoBlack"
              height="51px"
              mr={1}
              fontSize="16px"
              lineHeight="19.2px"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Flex>
              <Button
                ml={1}
                borderRadius="40px"
                width="110px"
                height="51px"
                fontSize="16px"
                lineHeight="19.2px"
                onClick={processRequest}
                autoFocus
              >
                Yes
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SubmissionPrompt;
