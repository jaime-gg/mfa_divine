import React from "react";

const Filters = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
            <ul className="flex-row">
            <li className={`mx-2 ${allSelected && 'navActive'}`}>
                        <span onClick={() => allSelected(true)}>
                            All
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && `navActive`
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                            >
                                {(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Filters;