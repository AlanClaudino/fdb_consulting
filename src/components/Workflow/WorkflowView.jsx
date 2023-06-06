import {
  DarkButton,
  DeleteButton,
  EditButton,
  InnerSection,
  TableContainer,
  TableData,
  TableTitle,
  WorflowContainer,
} from './styled';
import { Text, Title } from '../styled/styled';
import { DeleteIcon, Edit2Icon, PlusIcon, Trash, Trash2 } from 'lucide-react';

const WorkflowView = () => {
  return (
    <WorflowContainer>
      <Title style={{ textAlign: 'start' }}>Production Systems</Title>
      <section>
        <DarkButton>
          <PlusIcon size={16} /> Create new Workflow
        </DarkButton>
      </section>
      <TableContainer>
        <TableTitle>
          <InnerSection>
            <Text>Id</Text>
          </InnerSection>
          <InnerSection>
            <Text>Crop</Text>
          </InnerSection>
          <InnerSection>
            <Text>Description</Text>
          </InnerSection>
          <InnerSection>
            <Text>Manage</Text>
          </InnerSection>
        </TableTitle>
        <TableData>
          <InnerSection>
            <Text>001</Text>
          </InnerSection>
          <InnerSection>
            <Text>Soybean</Text>
          </InnerSection>
          <InnerSection>
            <Text>No Tillage</Text>
          </InnerSection>
          <InnerSection>
            <EditButton>
              <Edit2Icon size={18} />
            </EditButton>
            <DeleteButton>
              <Trash2 size={18} />
            </DeleteButton>
          </InnerSection>
        </TableData>
        <TableData>
          <InnerSection>
            <Text>001</Text>
          </InnerSection>
          <InnerSection>
            <Text>Soybean</Text>
          </InnerSection>
          <InnerSection>
            <Text>No Tillage</Text>
          </InnerSection>
          <InnerSection>
            <EditButton>
              <Edit2Icon size={18} />
            </EditButton>
            <DeleteButton>
              <Trash2 size={18} />
            </DeleteButton>
          </InnerSection>
        </TableData>
      </TableContainer>
    </WorflowContainer>
  );
};

export default WorkflowView;
