import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                '& .MuiAccordion-region': {
                  height: 'auto',
                },
                '& .MuiAccordionDetails-root': {
                  display: 'block',
                },
              }
            : {
                '& .MuiAccordion-region': {
                  height: 0,
                },
                '& .MuiAccordionDetails-root': {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Por que se organizar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign={'center'}>
          Organizar-se é uma habilidade essencial que traz uma série de benefícios significativos para a vida pessoal e profissional. Quando você se dedica a manter suas tarefas, compromissos e ambientes em ordem, a melhoria na qualidade de vida se torna evidente. Um dos principais benefícios de se organizar é o aumento da produtividade. Ter um sistema eficiente permite que você priorize tarefas e se concentre no que realmente importa. Com menos distrações e mais clareza, você consegue realizar mais em menos tempo, o que é maravilhoso! Além disso, a organização ajuda a reduzir o estresse. A desordem é uma fonte constante de pressão, e ao manter tudo organizado, você elimina a sensação de sobrecarga. Isso proporciona uma mente mais tranquila, permitindo que enfrente os desafios diários com mais serenidade.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
