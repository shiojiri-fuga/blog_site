import React, {useState} from "react";
import styled from "styled-components";

const TocContainer = styled.div`
  margin-bottom: 30px;
  border: 2px solid #22B465;
  border-radius: 3px;
`;

const TocHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px 0;
  background-color: #22B465;
  color: #fff;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
`;

const TocList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0 1em;
`;

const TocSubList = styled(TocList)`
  margin-top: 5px;
  padding-left: 1.1em;
`;

const TocItem = styled.li`
  padding: 5px 0;
  font-weight: ${({ level }) => (level === 1 ? '600' : '500')};
  &::before {
    content: ${({ level }) => (level === 1 ? '""' : '"・"')};
    margin-right: ${({ level }) => (level === 1 ? '0' : '0.5em')};
  }
`;

const TocLink = styled.a`
  color: #333;
  text-decoration: none;
`;

const ExpandButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #22B465;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 15px;
  cursor: pointer;
`;

const TableOfContents = ({tocData}) => {
  const [expanded, setExpanded] = useState(false);
  console.log(tocData);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TocContainer>
      <TocHeader onClick={toggleExpand}>
        目次 {expanded ? "[閉じる]" : "[開く]"}
      </TocHeader>
      {expanded && (
        <>
          <TocList>
            {tocData.map((item, index) => (
              <TocItem key={index} level={item.level}>
                <TocLink href={item.link}>{item.title}</TocLink>
                {item.level === 2 && (
                  <TocSubList>
                    {/* Add sub-items here */}
                  </TocSubList>
                )}
              </TocItem>
            ))}
          </TocList>
          <ExpandButton onClick={toggleExpand}>
            閉じる
          </ExpandButton>
        </>
      )}
    </TocContainer>
  );
};

export default TableOfContents;