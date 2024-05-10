import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Form from 'react-bootstrap/Form';
import '../../style/Experience/experience.css';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import {api_get} from '../../common/js/webservice.js';

const ExperienceComponent = (props) => {
    const pageTitle = "PROJECTS & EXPERIENCE";
    const pageDescription = "Learn more about my experience by filtering by a language or stack relevant to you. Click on each item to read more.";
    useEffect(() => {
        fetchProjectData();
    }, []);
    //determines if the advanced filter menu is expanded or collapsed
    const [filterOpen, setFilterOpen] = useState(false);
    //stores all selected tags from expanded filter
    const [tagsSelected, setTagsSelected] = useState([]);
    //stores the string in the minimized filter
    const [tagsSelectedAsString, setTagsSelectedAsString] = useState("None");
    //contains all experience details 
    const [experienceFromAPI, setExperienceFromAPI] = useState([]);
    //contains all tags for filtering
    const [tagsFromAPI, setTagsFromAPI] = useState([]);
    //all filtered experiences based on selected tags
    const [arrFilteredProjects, setArrFilteredProjects] = useState([]);

    const onTagClicked = (e) => {
        toggleFiltersByTag(e.target.closest(".tagContainer"));
    }
     //toggle css class for tag button & add to filter string
     const toggleFiltersByTag = (tagElement) => {
        let tagAsString = tagElement.textContent;
        let filtersSoFar = tagsSelected;
        //add or remove this tag 
        if (filtersSoFar.indexOf(tagAsString) < 0){
            filtersSoFar.push(tagAsString);
        }
        else {
            filtersSoFar.splice(filtersSoFar.indexOf(tagAsString), 1);
        }
        setTagsSelected(filtersSoFar);
        if (filtersSoFar.length >0){
            setTagsSelectedAsString(filtersSoFar.join(","))
        }
        else {
            setTagsSelectedAsString("None");
        }
        //toggle the button class 
        tagElement.classList.toggle("selected");

        //refine the results based on selected tags
        filterProjectsByTags(filtersSoFar);
       
    }
    //evaluate the select all switch when dom changes
    const evaluateSelectAll = () => {
        return document.querySelectorAll(".tagContainer").length == document.querySelectorAll(".tagContainer.selected").length
    }
    //toggles all available tags on the filter
    const onSelectAllTagsClicked = (e) => {
        let buttonsToToggle = [];
        if (e.target.checked){
            //add all remaining tags to filter
            buttonsToToggle = document.querySelectorAll(".tagContainer:not(.selected)")
        }
        else{
             //deselect all tags
            buttonsToToggle = document.querySelectorAll(".tagContainer.selected")
        }
        Array.prototype.forEach.call(buttonsToToggle, (e) => toggleFiltersByTag(e));
    }
    //updates the projects to display based on selected tags
    const filterProjectsByTags = (arrTags) => {
        //if no tags are being used for filter, display all projects
        if (arrTags.length == 0){
            setArrFilteredProjects(experienceFromAPI);
        } 
        else {
            //filter by tags
            let arrProjects = [];
            Array.prototype.forEach.call(arrTags, (tag) => 
            {
               var filteredProjects = experienceFromAPI.filter(exp => Object.values(exp.tags).some(val => typeof val === "string" && val ==(tag)));
               Array.prototype.forEach.call(filteredProjects, (project) => 
               {
                  if (!arrProjects.includes(project)) arrProjects.push(project);
               });
           });
           setArrFilteredProjects(arrProjects);
        }

    }
    //adds css class to rotate arrow if open
    const getAccordionArrowRotationClass = () => {
        if (filterOpen){
            return "expanded";
        }
        return "";
    }
    
    const fetchProjectData = async () => {
        // //get project data
        // api_get("bb/projects").then(data => {
        //     if (data){
        //         setExperienceFromAPI(data);
        //         setArrFilteredProjects(data);
        //     }        
        // }).catch(error => {
        //     console.error('Error:', error);
        // });
        //get tag data
        // api_get('bb/tags').then(data => { 
        //     if (data){
        //         setTagsFromAPI(data);
        //     }
        // });
        const apiUrl = process.env.REACT_APP_API_URL;

        try {
            let url = `${apiUrl}bb/tags`;
            const token = await fetch(url,{
            method: 'GET',
            mode: 'cors',
            credentials:'include'
          }).then(response => {
              response.json()
            })
            .then(
              (result) => {
              },
      
              (error) => {
      
              }
            )
          } catch (err) {
          }
    }
    return (
    <>
    <div id="experienceContainer" className="flexCol">  
        <div id="experienceBox" className="flexCol">
            <div className="divTitle">
                <h2><strong>{pageTitle}</strong></h2>
                <h3>{pageDescription}</h3>
            </div>   
            <div id="filterBox">
                <div id="filterMinimized" onClick={() => setFilterOpen(!filterOpen)} aria-controls="filterMaximized" aria-expanded={filterOpen}>
                    <span>Filters: {tagsSelectedAsString}</span>
                    <svg className={getAccordionArrowRotationClass()} xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 330 330">
                        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </div>
                <Collapse in={filterOpen}>             
                    <div id="filterMaximized">
                        <hr></hr>
                        <div id="selectAll" className="flexRow">
                            <span><strong>SELECT ALL</strong></span>
                            <Form>
                                <Form.Check // prettier-ignore
                                    custom
                                    type="switch"
                                    id="switch-select-all"
                                    onClick={(e) => onSelectAllTagsClicked(e)}
                                    checked={evaluateSelectAll()}
                                    label=""/>
                                </Form>
                        </div>
                        <div id="selectTag" className="flexRow flexWrap">
                            {tagsFromAPI.map(tag => 
                                <div className="tagContainer" onClick={(e) => onTagClicked(e)}>
                                    <span>{tag}</span>
                                </div>
                            )} 
                        </div>
                    </div>
                </Collapse>
            </div>              
            {arrFilteredProjects.length == 0 ? (
                <div className="experience_item no_results">
                    <div className="flexCol">                      
                        <h4 className="exp_project_name">No results found.</h4>
                        <hr></hr>
                        <h5 className="exp_project_description">Please check back soon for more!</h5>
                    </div>
                </div>  
            ):(
                <Accordion flush alwaysOpen>
                    {arrFilteredProjects.map(nav => (
                        <Accordion.Item eventKey={nav.id}>
                            <div className="experience_item" key={nav.id}>
                                <Accordion.Header> 
                                    <div className="flexCol">                      
                                    <h4 className="exp_project_name">{nav.project_name}</h4>
                                <hr></hr>
                                    <h5 className="exp_project_description">{nav.project_description}</h5>
                                    <span className="exp_position">{nav.position} - {nav.company_name}</span>
                                    <span className="exp_dates"><em>{nav.start_date} to {nav.end_date}</em></span>
                                    <div class="flexRow flexWrap exp_tags">
                                        {nav.tags.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))} 
                                    </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="exp_details">
                                        {nav.details.map(detail => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </div>
                        </Accordion.Item> 
                    ))}                         
                </Accordion>
            )}     
        </div>
     </div>
    </>
  );
};

export default ExperienceComponent;
