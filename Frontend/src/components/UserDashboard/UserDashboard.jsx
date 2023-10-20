import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;

 
`;

const Header = styled.div`
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  margin-left: 55px;
  color: rgba(178, 159, 126, 1);
  padding: 10px;
`;



const ImagePair = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  width: 630px;
  height: 400px; 


`;

function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Загрузка ссылок на картинки с API
    fetch('https://randomfox.ca/floof/')
      .then((response) => response.json())
      .then((data) => {
        // Создание 4 ссылок на картинки
        const imageUrls = Array.from({ length: 4 }, (_, index) => ({
          url: `https://randomfox.ca/images/${index + 1}.jpg`,
          alt: `Fox Image ${index + 1}`,
        }));
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке изображений:', error);
      });
  }, []);

  return (
    <ImagesContainer>
      <Header>Open deals</Header>
      <ImagePair>
        {images.slice(0, 2).map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image.url} alt={image.alt} />
          </ImageWrapper>
        ))}
      </ImagePair>
      <ImagePair>
        {images.slice(2).map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image.url} alt={image.alt} />
          </ImageWrapper>
        ))}
      </ImagePair>
    </ImagesContainer>
  );
}

export default ImageGrid;
