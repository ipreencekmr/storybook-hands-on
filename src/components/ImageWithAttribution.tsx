import React from 'react';

export interface ImageWithAttributionProps {
  src: string;
  alt: string;
  title?: string;
  attribution: {
    photographer: string;
    source: string;
    license?: string;
  };
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ImageWithAttribution: React.FC<ImageWithAttributionProps> = ({
  src,
  alt,
  title,
  attribution,
  width = '100%',
  height = 'auto',
  className = '',
}) => {
  return (
    <figure className={`block ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>}
      <img
        src={src}
        alt={alt}
        style={{ width, height, objectFit: 'cover' }}
        className="rounded-lg block"
      />
      <figcaption className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">
        <p className="font-semibold text-gray-700 mb-1">Photo by {attribution.photographer}</p>
        <p className="text-xs">
          Source:{' '}
          <a href={attribution.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {attribution.source}
          </a>
        </p>
        {attribution.license && <p className="text-xs text-gray-500 mt-1">License: {attribution.license}</p>}
      </figcaption>
    </figure>
  );
};
