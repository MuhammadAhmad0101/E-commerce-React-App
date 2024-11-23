import { Route, Routes } from "react-router-dom";
import View from "../Components/View";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Edit from "../Components/Edit";
import Create from "../Components/Form";
function Routings() {
      return (
            <Routes>
                  <Route
                        path="/"
                        element={
                              <>
                                    <Navbar />
                                    <div className="w-full min-h-[40rem] flex justify-start px-6 items-center flex-col gap-4">
                                          <Card />
                                    </div>
                              </>
                        }
                  />
                  <Route path="/view/:id" element={<View />} />
                  <Route path="/view/:id/edit" element={<Edit />} />
                  <Route path="/create" element={<Create />} />
            </Routes>
      );
}

export default Routings;
