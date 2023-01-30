package kirkensgaard.examples;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import static java.util.Objects.requireNonNull;

@Path("/some-page")
public class SomePage {

    private final Template mainpage;

    public SomePage(Template mainpage) {
        this.mainpage = requireNonNull(mainpage, "page is required");
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance get(@QueryParam("class") String typeOfClass) {
        return mainpage.data("templateUrl", typeOfClass);
    }

}
