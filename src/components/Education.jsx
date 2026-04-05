import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function Education() {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducation() {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('Error fetching education:', error);
      } else {
        setEducationList(data || []);
      }
      setLoading(false);
    }
    fetchEducation();
  }, []);

  if (loading) {
    return (
      <div id="educationId" className="animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="mb-10">
            <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
            <div className="h-5 bg-base-300 rounded w-64 mb-2"></div>
            <div className="h-4 bg-base-300 rounded w-48"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="educationId">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {educationList.map((edu, index) => {
          const isEven = index % 2 !== 0;
          
          return (
            <li key={edu.id}>
              {index > 0 && <hr />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`${isEven ? 'timeline-end' : 'timeline-start md:text-end'} mb-10`}>
                <time className="font-mono italic">{edu.year}</time>
                <div
                  className="text-lg font-black link link-hover"
                  onClick={() => {
                    if (edu.certificate_url) {
                      window.open(edu.certificate_url, "_blank");
                    }
                  }}
                  style={{ cursor: edu.certificate_url ? 'pointer' : 'default' }}
                >
                  {edu.title}
                </div>
                {edu.details.map((detail, detailIndex) => (
                  <ul key={detailIndex}>• {detail}</ul>
                ))}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Education;
