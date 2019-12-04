import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Divider from '@material-ui/core/Divider';
import { lessons } from '../../constants/lessons';
import { Task } from './Task';

export function Lesson() {
  const { lessonId } = useParams();
  const lesson = lessons[lessonId];

  if (!lesson) {
    return (
      <Typography variant="h2" component="h1">
        Такого урока не существует
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h2" component="h1">
        {lesson.title}
      </Typography>
      {lesson.sections.map(({ title, content }, i) => {
        return (
          <Box my={4} key={i}>
            {title && <Typography variant="h3">{title}</Typography>}
            {content.map(({ text, lang }) => {
              return (
                <Box my={4}>
                  {lang ? (
                    <SyntaxHighlighter key={text} language={lang} style={docco}>
                      {text}
                    </SyntaxHighlighter>
                  ) : (
                    <Typography
                      key={text}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        );
      })}
      {lesson.tasks && (
        <>
          <Divider />
          <Box my={4}>
            <Typography variant="h3">Задачи</Typography>
            {lesson.tasks.map(({ title, description, solution }) => (
              <Task
                key={title}
                title={title}
                description={description}
                solution={solution}
              />
            ))}
          </Box>
        </>
      )}
    </>
  );
}
