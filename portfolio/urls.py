from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExperienceViewSet, EducationViewSet, SkillViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'experiences', ExperienceViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
