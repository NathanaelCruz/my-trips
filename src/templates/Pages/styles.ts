import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--max-container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--larger);
  margin-bottom: var(--larger);
`

export const Body = styled.div`
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`
