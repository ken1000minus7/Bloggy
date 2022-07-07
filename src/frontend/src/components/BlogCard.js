import React from "react";
import {Link} from "react-router-dom";

export const BlogCard = () => {
    return (
        <Link to="/blogs" className="flex flex-col shadow-md text-start hover:bg-gray-50 duration-[400ms] hover:shadow-lg rounded-[20px] p-[10px]">
            <div className="font-bold text-[40px]">Blog Title</div>
            <div className="h-[100px] text-ellipsis overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi asperiores assumenda aut commodi cumque deleniti dignissimos, doloremque dolores dolorum ducimus fugit iste, iusto molestias nesciunt odit omnis pariatur possimus quam quos recusandae sapiente sequi tempore temporibus tenetur totam vero voluptatum. Aliquid animi deleniti exercitationem expedita, pariatur temporibus vero? A aliquid atque beatae, commodi consectetur consequuntur corporis, culpa delectus deleniti dicta dignissimos dolore esse est et eum eveniet harum laborum, libero maxime molestias nulla numquam obcaecati officia optio pariatur perferendis quae quaerat repellat repudiandae saepe sed tenetur unde voluptate? Accusantium ad architecto at consequatur corporis cumque dignissimos dolorem dolores doloribus ducimus error ex expedita fugiat illo illum impedit ipsum maxime molestiae molestias, nihil nobis non numquam odit officia omnis optio placeat quam quisquam reprehenderit sapiente unde veniam voluptatibus voluptatum? Ducimus eveniet, exercitationem facere fuga nemo nulla rem veritatis! Ab asperiores consequuntur excepturi, mollitia omnis perferendis quas tempore voluptatum! Accusantium aspernatur at cupiditate necessitatibus quibusdam rem ullam! Debitis quia reprehenderit voluptatum? Alias architecto asperiores, aspernatur assumenda atque aut autem commodi deserunt dolores ducimus, enim esse est expedita fuga inventore ipsa labore maiores minus necessitatibus nesciunt numquam optio pariatur possimus quam qui quia quo repudiandae tenetur totam unde velit voluptas voluptate voluptatum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor eveniet facere hic nam, nostrum numquam quidem! A doloribus dolorum ducimus, error harum ipsa ipsam modi nisi odio quam quia, quos recusandae reiciendis sequi vitae. Aut commodi dignissimos illum molestiae? Aspernatur debitis delectus dolore, eaque inventore labore laboriosam molestiae nam necessitatibus, obcaecati, quisquam repudiandae saepe vero? Ad asperiores atque corporis earum esse molestiae, mollitia quos saepe. Alias, autem cumque ea eaque, eum eveniet, illo incidunt labore laudantium modi mollitia nihil nostrum ullam. Consectetur consequuntur, deleniti deserunt doloribus ex facilis laboriosam maxime modi nemo quia, quibusdam reprehenderit rerum, sapiente sunt voluptatum.
            </div>
            <div className="flex flex-row">
                <span>By boomer boi</span>
            </div>
        </Link>
    )
}