class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :slug, :img_url
  has_many :reviews
end
